import { Inject, Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult, getRepository } from "typeorm";
import { Contact } from "src/entities/contact.entity";
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContactService {
	constructor(
		@InjectRepository(Contact)
		private ContactRepository: Repository<Contact>
	) {}

	async create(contact: Contact): Promise<Contact> {
		return await this.ContactRepository.save(contact);
	}

	async readAll(): Promise<Contact[]> {
		return await this.ContactRepository.find();
	}

	async trophies(): Promise<Contact[]> {
		return await this.ContactRepository
		.createQueryBuilder('trophies').select(['user', 'trophies']).orderBy("trophies", "DESC").getMany();
	}

	async update(contact: Contact): Promise<UpdateResult> {
		return await this.ContactRepository.update(contact.id, contact);
	}

	async  delete(id): Promise<DeleteResult> {
		return await this.ContactRepository.delete(id);
	}
}
