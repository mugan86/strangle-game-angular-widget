import { SecretWord } from './../interfaces/secret-word.interface';
import { Injectable } from '@angular/core';
import randomInt from 'random-int';

@Injectable({
  providedIn: 'root'
})
export class SecretWordApiService {
  listSecretWords: SecretWord [] = [
    {
      topic: 'My name',
      secret: 'anartz mugika ledo',
      source: ''
    },
    {
      topic: 'NBA 2017/2018 Season Champion',
      secret: 'Golden State Warriors',
      source: 'https://es.m.wikipedia.org/wiki/Temporada_2017-18_de_la_NBA'
    },
    {
      topic: 'UEFA Champions League Champion 2017/2018',
      secret: 'Real Madrid FC',
      source: 'https://en.m.wikipedia.org/wiki/2017%E2%80%9318_UEFA_Champions_League'
    }
  ];
  getWord() {
    return this.listSecretWords[randomInt(this.listSecretWords.length - 1)];
  }
}
