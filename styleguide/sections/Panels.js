import React, {Component} from 'react';

import Section from './Section';
import styles from '../styleguide.css';
import * as m from 'globals/modifiers.css';
import List from 'components/List/List';
import Panel from 'components/Panel/Panel';
import Icon from 'components/Icon/Icon';
import CoffeeInfo from 'components/CoffeeInfo/CoffeeInfo';

export default class Panels extends Component {
  render() {
    return (
      <Section name="Panels">
        <Panel>
          <p>This is a panel</p>
        </Panel>
        <br/>

        <div className={styles.grid}>

          <div className={styles.quarter}>
            <Panel>You can use them with grids</Panel>
          </div>
          <div className={styles.threequarter}>
            <Panel>
              Pretty easy. Just wrap the panel in a container that you control the width of.
            </Panel>
          </div>
        </div>

        <div className={[styles.grid, m.mtm].join(' ')}>
          <div className={styles.third}>
            <Panel>
              <List>
                <li>Also with a list</li>
                <li><a href="#">Like this</a></li>
                <li><a className="listActive" href="#">or this</a></li>
                <li>
                  <a className="listActive" href="#">
                    <Icon className={m.mrs} name="coffee"/>
                  and this
                  </a>
                </li>
              </List>
            </Panel>
          </div>

        </div>

        <div className={m.mtl}>
          <CoffeeInfo
            coffee="Finca Ltd Sex"
            tastingNote="Tastes of love, cherries and biscuits."
            origin="Columbia"
            farm="Bad Ass Farm"
            varietal="Bourbon"
            process="Washed"
            mugUrl="http://loremflickr.com/350/500/roastedcoffee"
          />
        </div>

      </Section>
    );
  }
}
