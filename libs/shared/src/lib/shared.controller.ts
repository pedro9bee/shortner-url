import { Controller } from '@nestjs/common';
import { SharedService } from './shared.service';

@Controller('shared')
export class SharedController {
  constructor(private sharedService: SharedService) {}
  
}
