import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from '../service/github.service';
import Flatted from 'flatted';

@Controller('commits')
export class CommitsController {

  constructor(private readonly githubService: GithubService) {}

  @Get(':owner/:repo')
  async getCommits(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
  ) {
    const commits = await this.githubService.getCommits(owner, repo);
    console.log(commits)
    return commits; // This will automatically be converted to JSON by Nest.js
  }

  @Get(':owner/:repo/:ref')
    async getCommit(  @Param('owner') owner: string,
                    @Param('repo') repo: string,
                    @Param('ref') ref: string
                    ){

    const commit = await this.githubService.getCommit(owner, repo, ref);
    return commit; // This will automatically be converted to JSON by Nest.js
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
