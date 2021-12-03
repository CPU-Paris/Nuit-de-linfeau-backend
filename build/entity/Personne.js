"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var typeorm_1 = require("typeorm");
var Texte_1 = require("./Texte");
var Personne = /** @class */ (function () {
    function Personne() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Personne.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ unique: true }),
        __metadata("design:type", String)
    ], Personne.prototype, "nom_prenom", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Texte_1.Texte; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Texte_1.Texte)
    ], Personne.prototype, "bio", void 0);
    Personne = __decorate([
        typeorm_1.Entity()
    ], Personne);
    return Personne;
}());
exports.Personne = Personne;
//# sourceMappingURL=Personne.js.map