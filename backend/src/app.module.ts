import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Contact } from './entities/contact.entity';
import { ContactService } from './contact/contact.service';
import { ContactsController } from './contacts/contacts.controller';

@Module({
  imports: [
	  TypeOrmModule.forRoot({
		  type: 'postgres',
		  host: 'localhost',
		  port: 5432,
		  database: 'nestngdb',
		  username: 'david',
		  password: 'P4ssw0rD',
		  entities: [__dirname + '/**/*.entity{.ts,.js}'],
		  synchronize: true,
	  }),
	  TypeOrmModule.forFeature([Contact]),
  ],
  controllers: [AppController, ContactsController],
  providers: [AppService, ContactService],
})
export class AppModule {}
