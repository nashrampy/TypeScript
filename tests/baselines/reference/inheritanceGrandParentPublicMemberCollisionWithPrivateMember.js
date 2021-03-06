//// [inheritanceGrandParentPublicMemberCollisionWithPrivateMember.ts]
class A {
    public myMethod() { }
}

class B extends A { }

class C extends B {
    private myMethod() { }
}


//// [inheritanceGrandParentPublicMemberCollisionWithPrivateMember.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A = (function () {
    function A() {
    }
    A.prototype.myMethod = function () { };
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
    }
    return B;
}(A));
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
    }
    C.prototype.myMethod = function () { };
    return C;
}(B));
