import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ContactService } from "src/contact/contact.service";
import { Contact } from "src/entities/contact.entity";

@Controller('contacts')
export class ContactsController {
	constructor(private contactService: ContactService) {

	}

	@Get()
	read(): Promise<Contact[]> {
		return this.contactService.readAll();
	}

	@Get('leaderboard')
	trophies(): Promise<Contact[]> {
		return this.contactService.trophies();
	}

	@Post('create')
	async create(@Body() contact: Contact): Promise<any> {
		return this.contactService.create(contact);
	}

	@Put(':id/update')
	async update(@Param('id') id, @Body() contact: Contact): Promise<any> {
		contact.id = Number(id);
		return this.contactService.update(contact);
	}

	@Delete(':id/delete')
	async delete(@Param('id') id): Promise<any> {
		return this.contactService.delete(id);
	}
}
