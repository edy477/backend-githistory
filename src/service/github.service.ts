import { Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { AxiosResponse } from 'axios';
import { map, Observable, tap } from "rxjs";
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
    console.log(headers)

    // Add a console.log statement before making the HTTP request
    console.log('Making GitHub API request with URL:', url);

    return this.httpService
      .get(url, { headers })
      .pipe(map((response: AxiosResponse) => response.data));
      /*.pipe(
      tap((response) => {
        console.log('GitHub API response:', response);
      })
    );*/


  }
  getCommit(
    owner: string,
    repo: string,
    ref: string
  ): Observable<AxiosResponse> {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits/${ref}`;
    const headers = this.getHeaders();
    return this.httpService
      .get(url, { headers })
      .pipe(map((response: AxiosResponse) => response.data));

  }

  getCommitsWithRef(
    owner: string,
    repo: string,
    ref: string
  ): Observable<AxiosResponse> {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
    const queryParams = { sha: ref };

    const headers = this.getHeaders();
    return this.httpService
      .get(url, { params: queryParams, headers: headers })
      .pipe(map((response: AxiosResponse) => response.data));

  }



}
