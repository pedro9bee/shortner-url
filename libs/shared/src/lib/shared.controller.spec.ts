import { Test } from '@nestjs/testing';
import { SharedController } from './shared.controller';
import { SharedService } from './shared.service';

describe('SharedController', () => {
  let controller: SharedController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SharedService],
      controllers: [SharedController],
    }).compile();

    controller = module.get(SharedController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
