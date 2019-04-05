import React from 'react';
import { storiesOf } from '@storybook/react';
import { Details } from '../src';

storiesOf('Details', module)
  .add('Standard', () => (
    <Details text="Where can I find my NHS number?">
      <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
      <p>
        You can find your NHS number on any document sent to you by the NHS.
        This may include:
      </p>
      <ul>
        <li>prescriptions</li>
        <li>test results</li>
        <li>hospital referral letters</li>
        <li>appointment letters</li>
        <li>your NHS medical card</li>
      </ul>
      <p>
        Ask your GP practice for help if you can&apos;t find your NHS number.
      </p>
    </Details>
  ))
  .add('Expander', () => (
    <Details expander text="Opening Times">
      <table>
        <tbody>
          <tr>
            <th>
              <strong>Day of the week</strong>
            </th>
            <th>
              <strong>Opening hours</strong>
            </th>
          </tr>
          <tr>
            <th>Monday</th>
            <td>9am to 6pm</td>
          </tr>
          <tr>
            <th>Tuesday</th>
            <td>9am to 6pm</td>
          </tr>
          <tr>
            <th>Wednesday</th>
            <td>9am to 6pm</td>
          </tr>
          <tr>
            <th>Thursday</th>
            <td>9am to 6pm</td>
          </tr>
          <tr>
            <th>Friday</th>
            <td>9am to 6pm</td>
          </tr>
          <tr>
            <th>Saturday</th>
            <td>9am to 1pm</td>
          </tr>
          <tr>
            <th>Sunday</th>
            <td>Closed</td>
          </tr>
        </tbody>
      </table>
    </Details>
  ));
