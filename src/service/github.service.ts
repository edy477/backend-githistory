import { Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { AxiosResponse } from 'axios';
import { Observable, tap } from "rxjs";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GithubService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  private getHeaders(): { [key: string]: string } {
    const accessToken = this.configService.get<string>('GITHUB_ACCESS_TOKEN');
    return {
      Authorization: `Bearer ${accessToken}`,
    };
  }

  getCommits(owner: string, repo: string): Observable<AxiosResponse> {

    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
    const headers = this.getHeaders();

    // Add a console.log statement before making the HTTP request
    console.log('Making GitHub API request with URL:', url);

    return this.httpService.get(url, { headers }).pipe(
      tap((response) => {
        console.log('GitHub API response:', response);
      })
    );


  }
}
