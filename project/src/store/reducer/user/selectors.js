import {NameSpace} from '../root-reducer';

export const getStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUserAvatar = (state) => state[NameSpace.USER].avatarImg;
export const getUserEmail = (state) => state[NameSpace.USER].email;
