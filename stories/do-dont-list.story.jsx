import React from 'react';
import { storiesOf } from '@storybook/react';
import { DoDontList } from '../src';

storiesOf("Do Don't List", module)
  .add('Do', () => (
    <DoDontList title="Do" type="tick">
      <DoDontList.Do>
        cover blisters that are likely to burst with a soft plaster or dressing
      </DoDontList.Do>
      <DoDontList.Do>
        wash your hands before touching a burst blister
      </DoDontList.Do>
      <DoDontList.Do>
        allow the fluid in a burst blister to drain before covering it with a
        plaster or dressing
      </DoDontList.Do>
    </DoDontList>
  ))
  .add("Don't", () => (
    <DoDontList title="Don't" type="cross">
      <DoDontList.Dont>burst a blister yourself</DoDontList.Dont>
      <DoDontList.Dont>peel the skin off a burst blister</DoDontList.Dont>
      <DoDontList.Dont>pick at the edges of the remaining skin</DoDontList.Dont>
      <DoDontList.Dont>
        wear the shoes or use the equipment that caused your blister until it
        heals
      </DoDontList.Dont>
    </DoDontList>
  ));
