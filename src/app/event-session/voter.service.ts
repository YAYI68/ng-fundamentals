import { Injectable } from '@angular/core';

@Injectable()
export class VoterService{


    deleteVoter(session:any,voterName:string){
        session.voters = session.voters.filter((voter: string) => voter !== voterName);

    }
    addVoter(session:any,voterName:string){
        session.voters.push(voterName);

    }
    userHasVoted(session:any,voterName:string){
        return session.voters.some((voter: string) => voter === voterName);
    }
}