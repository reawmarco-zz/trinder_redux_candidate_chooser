export const FETCH_CANDIDATES = 'FETCH_CANDIDATES';
export const APROVE_CANDIDATE = 'APROVE_CANDIDATE';
export const REJECT_CANDIDATE = 'REJECT_CANDIDATE';

export function fetchCandidates() {
  return {
    type: FETCH_CANDIDATES,
    payload: initialCandidates
  }
}

export function approveCandidate(candidate) {
  return {
    type: APROVE_CANDIDATE,
    payload: candidate

  }
}

export function rejectCandidate(candidate) {
  return {
    type: REJECT_CANDIDATE,
    payload: candidate

  }
}

const initialCandidates = [{
  id:1,
  name: 'Marcelo Tarzan',
  imageUrl: 'https://avatars0.githubusercontent.com/u/9592764?v=3&s=400'
},
{
  id:2,
  name: 'Saulo Oliveira',
  imageUrl: 'https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/16114444_1197096917063936_6131372202561428990_n.jpg?oh=0f6e1a8b1ffb766fc8d8b1da17e5ea65&oe=5931C12A'
},
{
  id:3,
  name: 'Felipe Fernandes Diogo',
  imageUrl: 'https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/16387080_10211854284934885_3343278143028897396_n.jpg?oh=0bdba3bd98bc60d7da39670d956e563e&oe=58FDF4DC'
},
{
  id:4,
  name: 'Marcelo Cure',
  imageUrl: 'https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/15492588_1289033547806839_8427673072030655805_n.jpg?oh=dc44ebf353874e0ac2e26a6c7fad1211&oe=593240ED'
}];
