import { makeAutoObservable } from "mobx"

export default class ProductStore {

    private _qrActive: boolean = true

    constructor() {
        makeAutoObservable(this)   // здесь мобикс следит за изменениями этих переменных, принимает контекст текущего класса
    }

    enableQR() {
        this._qrActive = true;
    }

    disableQR() {
        this._qrActive = false;
    }

    toggleQR() {
        this._qrActive = !this._qrActive;
    }



    get qrActive() {
        return this._qrActive
    }

}