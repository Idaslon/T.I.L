import React from 'react';
import { Switch } from 'react-router-dom';

import Main from '~/pages/Main';
import Play from '~/pages/Play';
import Upload from '~/pages/Upload';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/play/:id" exact component={Play} />
      <Route path="/upload" exact component={Upload} />
    </Switch>
  );
}
