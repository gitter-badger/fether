// Copyright 2015-2018 Parity Technologies (UK) Ltd.
// This file is part of Parity.
//
// SPDX-License-Identifier: BSD-3-Clause

import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Sent from './Sent';
import Signer from './Signer';
import TxForm from './TxForm';

class Send extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/send/:tokenAddress' component={TxForm} />
        <Route path='/send/:tokenAddress/signer' component={Signer} />
        <Route path='/send/:tokenAddress/sent' component={Sent} />
        <Redirect to='/' />
      </Switch>
    );
  }
}

export default Send;
