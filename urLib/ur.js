"use strict";

var ur;

(function (ur) {
    var Point = (function () {
        function Point(x, y) {
            this.x = x || 0;
            this.y = y || 0;
        }
        return Point;
    }());

    ur.Point = Point;
    Laya.ClassUtils.regClass('ur.Point', Point);

    var Rectangle = (function () {
        function Rectangle(x, y, w, h) {
            this.x = x;
            this.y = y;
            this.width = w;
            this.height = h;
        }
        return Rectangle;
    }());

    ur.Rectangle = Rectangle;
    Laya.ClassUtils.regClass('ur.Rectangle', Rectangle);

    var Result = (function () {
        function Result(name, score) {
            this.name = name;
            this.score = score;
        }
        return Result;
    }());

    ur.Result = Result;
    Laya.ClassUtils.regClass('ur.Result', Result);
    /**
     * Create by richliu1023
     * @date 2016-08-24
     * @email richliu1023@gmail.com
     * @github https://github.com/RichLiu1023
     * @description
     * @url：http://depts.washington.edu/aimgroup/proj/dollar/index.html
     * 手写单笔识别
     */

    var UnistrokeRecognize = (function () {
        function UnistrokeRecognize() {
            this.Origin = new Point();
            this.Diagonal = 0;
            this.HalfDiagonal = 0;
            this._NumPoints = 64;
            this._SquareSize = 0.0;
            this._AngleRange = UnistrokeRecognize.prototype.Deg2Rad(45.0);
            this._AnglePrecision = UnistrokeRecognize.prototype.Deg2Rad(2.0);
            this._Phi = 0;
            this.Unistrokes = [];
            this.SquareSize = 250.0;
            this.AnglePrecision = 2.0;
            this.AngleRange = 45.0;
            this.Phi = 0.5 * (-1.0 + Math.sqrt(5.0));
            this.NumPoints = 64;
        }

        //Phi
        UnistrokeRecognize.prototype = {
            get Phi() {
                return this._Phi;
            },
            /**
             * 黄金分割比率
             * @param value
             * @constructor
             */
            set Phi(value) {
                this._Phi = value;
            },
            //
            get SquareSize() {
                return this._SquareSize;
            },
            set SquareSize(value) {
                this._SquareSize = value;
                this.Diagonal = Math.sqrt(this._SquareSize * this._SquareSize + this._SquareSize * this._SquareSize);
                this.HalfDiagonal = 0.5 * this.Diagonal;
            },
            //
            /**
             * @returns {number} 弧度
             * @constructor
             */
            get AngleRange() {
                return this._AngleRange;
            },
            /**
             * @param value 角度
             * @constructor
             */
            set AngleRange(value) {
                this._AngleRange = this.Deg2Rad(value);
            },
            //
            get AnglePrecision() {
                return this._AnglePrecision;
            },
            set AnglePrecision(value) {
                this._AnglePrecision = this.Deg2Rad(value);
            },
            //
            get NumPoints() {
                return this._NumPoints;
            },
            /**
             * 最大点数默认64
             * @param value
             * @constructor
             */
            set NumPoints(value) {
                this._NumPoints = value;
            }
        };

        UnistrokeRecognize.create = function () {
            return new UnistrokeRecognize();
        };

        UnistrokeRecognize.prototype.Unistroke = function (name, points) {
            var data = {};
            data.Name = name;
            data.Points = this.Resample(points, this._NumPoints);
            var radians = this.IndicativeAngle(data.Points);
            data.Points = this.RotateBy(data.Points, -radians);
            data.Points = this.ScaleTo(data.Points, this._SquareSize);
            data.Points = this.TranslateTo(data.Points, this.Origin);
            data.Vector = this.Vectorize(data.Points); // for Protractor

            return data;
        };
        /**
         * 识别
         * @param points
         * @param useProtractor true:用量角器（快）.false:黄金分割搜索
         * @returns {Result}
         * @constructor
         */
        UnistrokeRecognize.prototype.recognize = function (points, useProtractor) {
            points = this.Resample(points, this._NumPoints);
            var radians = this.IndicativeAngle(points);
            points = this.RotateBy(points, -radians);
            points = this.ScaleTo(points, this._SquareSize);
            points = this.TranslateTo(points, this.Origin);
            var vector = this.Vectorize(points); // for Protractor

            var b = +Infinity;
            var u = -1;

            for (var i = 0; i < this.Unistrokes.length; i++) {
                var d;
                if (useProtractor) d = this.OptimalCosineDistance(this.Unistrokes[i].Vector, vector); else d = this.DistanceAtBestAngle(points, this.Unistrokes[i], -this._AngleRange, +this._AngleRange, this._AnglePrecision);

                if (d < b) {
                    b = d; // best (least) distance

                    u = i; // unistroke
                }
            }
            // console.log(b,  this.HalfDiagonal);
            return u == -1 ? new Result("No match", 0.0) : new Result(this.Unistrokes[u].Name, useProtractor ? 1.0 / b : 1.0 - b / this.HalfDiagonal);
        };

        UnistrokeRecognize.prototype.addGesture = function (name, points) {
            this.Unistrokes[this.Unistrokes.length] = this.Unistroke(name, points); // append new unistroke
        };

        UnistrokeRecognize.prototype.deleteAllGestures = function () {
            this.Unistrokes.length = 0;
        };

        /**
         * 通过name获取Gesture信息
         * @param name 如果不传值，则返回所有的信息
         * @returns {any}
         */
        UnistrokeRecognize.prototype.getGesture = function (name) {
            var result = [];

            if (name) {
                var num = this.Unistrokes.length;

                for (var i = 0; i < num; i++) {
                    if (this.Unistrokes[i].Name == name) result.push(this.Unistrokes[i]);
                }
            } else {
                return this.Unistrokes;
            }

            return result;
        }; //=========================================================


        UnistrokeRecognize.prototype.Resample = function (points, n) {
            var I = this.PathLength(points) / (n - 1); // interval length

            var D = 0.0;
            var newpoints = [points[0]];
            if (I <= 0.0) return newpoints; //bug repair

            for (var i = 1; i < points.length; i++) {
                var d = this.Distance(points[i - 1], points[i]);

                if (D + d >= I) {
                    var qx = points[i - 1].x + (I - D) / d * (points[i].x - points[i - 1].x);
                    var qy = points[i - 1].y + (I - D) / d * (points[i].y - points[i - 1].y);
                    var q = new Point(qx, qy);
                    newpoints[newpoints.length] = q; // append new point 'q'

                    points.splice(i, 0, q); // insert 'q' at position i in points s.t. 'q' will be the next i

                    D = 0.0;
                } else D += d;
            }

            if (newpoints.length == n - 1) newpoints[newpoints.length] = new Point(points[points.length - 1].x, points[points.length - 1].y);
            return newpoints;
        };

        UnistrokeRecognize.prototype.IndicativeAngle = function (points) {
            var c = this.Centroid(points);
            return Math.atan2(c.y - points[0].y, c.x - points[0].x);
        };

        UnistrokeRecognize.prototype.RotateBy = function (points, radians) {
            var c = this.Centroid(points);
            var cos = Math.cos(radians);
            var sin = Math.sin(radians);
            var newpoints = new Array();

            for (var i = 0; i < points.length; i++) {
                var qx = (points[i].x - c.x) * cos - (points[i].y - c.y) * sin + c.x;
                var qy = (points[i].x - c.x) * sin + (points[i].y - c.y) * cos + c.y;
                newpoints[newpoints.length] = new Point(qx, qy);
            }

            return newpoints;
        };

        UnistrokeRecognize.prototype.ScaleTo = function (points, size) {
            var B = this.BoundingBox(points);
            var newpoints = [];

            for (var i = 0; i < points.length; i++) {
                var qx = points[i].x * (size / B.width);
                var qy = points[i].y * (size / B.height);
                newpoints[newpoints.length] = new Point(qx, qy);
            }

            return newpoints;
        };

        UnistrokeRecognize.prototype.TranslateTo = function (points, pt) {
            var c = this.Centroid(points);
            var newpoints = [];

            for (var i = 0; i < points.length; i++) {
                var qx = points[i].x + pt.x - c.x;
                var qy = points[i].y + pt.y - c.y;
                newpoints[newpoints.length] = new Point(qx, qy);
            }

            return newpoints;
        };

        UnistrokeRecognize.prototype.Vectorize = function (points) {
            var sum = 0.0;
            var vector = [];

            for (var i = 0; i < points.length; i++) {
                vector[vector.length] = points[i].x;
                vector[vector.length] = points[i].y;
                sum += points[i].x * points[i].x + points[i].y * points[i].y;
            }

            var magnitude = Math.sqrt(sum);

            for (var i = 0; i < vector.length; i++) {
                vector[i] /= magnitude;
            }

            return vector;
        };

        UnistrokeRecognize.prototype.OptimalCosineDistance = function (v1, v2) {
            var a = 0.0;
            var b = 0.0;

            for (var i = 0; i < v1.length; i += 2) {
                a += v1[i] * v2[i] + v1[i + 1] * v2[i + 1];
                b += v1[i] * v2[i + 1] - v1[i + 1] * v2[i];
            }

            var angle = Math.atan(b / a);
            return Math.acos(a * Math.cos(angle) + b * Math.sin(angle));
        };

        UnistrokeRecognize.prototype.DistanceAtBestAngle = function (points, T, a, b, threshold) {
            var x1 = this._Phi * a + (1.0 - this._Phi) * b;
            var f1 = this.DistanceAtAngle(points, T, x1);
            var x2 = (1.0 - this._Phi) * a + this._Phi * b;
            var f2 = this.DistanceAtAngle(points, T, x2);

            while (Math.abs(b - a) > threshold) {
                if (f1 < f2) {
                    b = x2;
                    x2 = x1;
                    f2 = f1;
                    x1 = this._Phi * a + (1.0 - this._Phi) * b;
                    f1 = this.DistanceAtAngle(points, T, x1);
                } else {
                    a = x1;
                    x1 = x2;
                    f1 = f2;
                    x2 = (1.0 - this._Phi) * a + this._Phi * b;
                    f2 = this.DistanceAtAngle(points, T, x2);
                }
            }

            return Math.min(f1, f2);
        };

        UnistrokeRecognize.prototype.DistanceAtAngle = function (points, T, radians) {
            var newpoints = this.RotateBy(points, radians);
            return this.PathDistance(newpoints, T.Points);
        };

        UnistrokeRecognize.prototype.Centroid = function (points) {
            var x = 0.0,
                y = 0.0;

            for (var i = 0; i < points.length; i++) {
                x += points[i].x;
                y += points[i].y;
            }

            x /= points.length;
            y /= points.length;
            return new Point(x, y);
        };

        UnistrokeRecognize.prototype.BoundingBox = function (points) {
            var minX = +Infinity,
                maxX = -Infinity,
                minY = +Infinity,
                maxY = -Infinity;

            for (var i = 0; i < points.length; i++) {
                minX = Math.min(minX, points[i].x);
                minY = Math.min(minY, points[i].y);
                maxX = Math.max(maxX, points[i].x);
                maxY = Math.max(maxY, points[i].y);
            }

            return new Rectangle(minX, minY, maxX - minX, maxY - minY);
        };

        UnistrokeRecognize.prototype.PathDistance = function (pts1, pts2) {
            var d = 0.0;

            for (var i = 0; i < pts1.length; i++) {
                d += this.Distance(pts1[i], pts2[i]);
            }

            return d / pts1.length;
        };

        UnistrokeRecognize.prototype.PathLength = function (points) {
            var d = 0.0;

            for (var i = 1; i < points.length; i++) {
                d += this.Distance(points[i - 1], points[i]);
            }

            return d;
        };

        UnistrokeRecognize.prototype.Distance = function (p1, p2) {
            var dx = p2.x - p1.x;
            var dy = p2.y - p1.y;
            return parseFloat(Math.sqrt(dx * dx + dy * dy).toFixed(2));
        };

        UnistrokeRecognize.prototype.Deg2Rad = function (d) {
            return d * Math.PI / 180.0;
        };

        return UnistrokeRecognize;
    }());

    ur.UnistrokeRecognize = UnistrokeRecognize;
    Laya.ClassUtils.regClass('ur.UnistrokeRecognize', UnistrokeRecognize);
})(ur || (ur = {}));