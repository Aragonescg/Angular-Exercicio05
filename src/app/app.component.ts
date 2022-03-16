import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex05-todolist';

  constructor(private _snackBar: MatSnackBar) {
    this.load()
  }


  openSnackBar() {
    this._snackBar.open('Apagou tudo', 'sair');
  }

  itens: string[] = []

  @ViewChild('inputtarefa')
  ipt!: ElementRef

  add(valor: string): void {
    this.itens.unshift(valor)
    this.ipt.nativeElement.value = ''
    this.save()

  }

  remove(remove: any) {
    this.itens.pop()
    this.save()
  }

  limparTudo() {
    this.itens.splice(0, 100)
    this.save()

  }
  save(): void {
    let dados = JSON.stringify(this.itens)
    localStorage.setItem('itens', dados)
  }

  load(): void {
    let dados = localStorage.getItem('itens')
    this.itens = JSON.parse(dados || '[]')
  }

}
