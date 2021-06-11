import { html, fixture, expect } from '@open-wc/testing';

import { MarsRadio } from '../src/MarsRadioButton.js';
import '../mars-radio-button.js';

describe('MarsRadio', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MarsRadio>(html`<mars-radio></mars-radio>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<MarsRadio>(html`<mars-radio></mars-radio>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MarsRadio>(
      html`<mars-radio title="attribute title"></mars-radio>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MarsRadio>(html`<mars-radio></mars-radio>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});