import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from '../../service/github.service';
import Flatted from 'flatted';

@Controller('commits')
export class CommitsController {

  constructor(private readonly githubService: GithubService) {}

  @Get(':owner/:repo')
  getCommits(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
  ) {
    return this.githubService.getCommits(owner, repo);
  }

/*
  constructor(private readonly githubService: GithubService) {}

  @Get(':owner/:repo')
  async getCommits(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
  ) {

    try{
      const  response = await this.githubService.getCommits(owner, repo);
      const responseData = response;
      const jsonString = Flatted.stringify(responseData);



      console.log(jsonString);
    }catch (e) {

    }


  }

  //  const response = this.githubService.getCommits(owner, repo);

    //const jsonString= Flatted.stringify(response);
//  }*/

}
