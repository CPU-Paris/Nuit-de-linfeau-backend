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
exports.Sauvetage = void 0;
var typeorm_1 = require("typeorm");
var Bateau_1 = require("./Bateau");
var Personne_1 = require("./Personne");
var Texte_1 = require("./Texte");
var Sauvetage = /** @class */ (function () {
    function Sauvetage() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Sauvetage.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Personne_1.Personne; }, function (personne) { return personne.id; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Sauvetage.prototype, "sauveteurs", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Personne_1.Personne; }, function (personne) { return personne.id; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Sauvetage.prototype, "sauve", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Sauvetage.prototype, "date", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Texte_1.Texte; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Texte_1.Texte)
    ], Sauvetage.prototype, "desc", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Bateau_1.Bateau; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Array)
    ], Sauvetage.prototype, "bateaux", void 0);
    Sauvetage = __decorate([
        typeorm_1.Entity()
    ], Sauvetage);
    return Sauvetage;
}());
exports.Sauvetage = Sauvetage;
//# sourceMappingURL=Sauvetage.js.map