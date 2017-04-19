import { httpGet, httpPost } from './http';
import { LingvodocEntity } from './utils';

export class Perspective extends LingvodocEntity {
  static storageName = 'perspectives';

  get storageName() { // eslint-disable-line class-methods-use-this
    return Perspective.storageName;
  }

  update(props) {
    return Object.assign(new Perspective(), this, props);
  }
}

export function published() {
  return httpGet(`/perspectives?published=true`);
}

export function meta() {
  return httpGet('/perspectives_meta');
}