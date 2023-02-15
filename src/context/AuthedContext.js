import React from 'react';

const AuthedContext = React.createContext();

export const AuthedProvider = AuthedContext.Provider;
export const AuthedConsumer = AuthedContext.Consumer;

export default AuthedContext;
