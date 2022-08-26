export class UserEntity {
  constructor(data: unknown) {
    Object.assign(this, data);
  }

  name: string;
  id: string;
}
