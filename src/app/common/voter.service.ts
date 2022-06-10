import { Injectable } from '@angular/core';

@Injectable()
export class VoterService {

    deleteVoter(session:any, voterName:string) {
        session.voter = session.voters.filter( (voter: string) => voter !== voterName );
    }

}