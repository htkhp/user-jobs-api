import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrUpdateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  job: number;

  @IsNumber()
  @IsNotEmpty()
  reports_to: number;
}
