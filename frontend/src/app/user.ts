export class User {
	id: number|undefined ;
	name: any = '';
	rol: number|undefined;
	token: string = '';
	two_factor: boolean = false;
	iconId: number|undefined;
}