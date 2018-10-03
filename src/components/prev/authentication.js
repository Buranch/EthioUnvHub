export const setTokenAndUserId = (tokenId, userId) => {
  localStorage.setItem('txId', tokenId);
  localStorage.setItem('uxId', userId);
}

export const clearTokenAndUserId = () => {
  localStorage.removeItem('txId');
  localStorage.removeItem('uxId');
}

export const getTokenId = () => localStorage.getItem('txId');
export const getUserId = () => localStorage.getItem('uxId');

export const isUserAuthenticated = () => !!localStorage.getItem('txId');
export const isHisOwnPost = (postId) => getUserId() === postId;
