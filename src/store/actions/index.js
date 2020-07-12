// import initialState from '../reducer';
// export default (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case 'UPDATE ACTIVE CATEGORY':
//       const candidates = state.candidates.map((candidate) => {
//         if (candidate.name === payload) {
//           return { name: candidate.name, votes: candidate.votes + 1 };
//         } else {
//           return candidate;
//         }
//       });
//       return { candidates, totalVotes };
//     case 'RESET':
//       return initialState;
//     default:
//       return state;
//   }
// };
