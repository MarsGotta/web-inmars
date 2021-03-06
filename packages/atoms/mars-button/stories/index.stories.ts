import { html } from 'lit-element';
import { tagsFont, TemplateResult } from '@web-inmars/core';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import '../mars-button.js';

export default {
  title: 'MarsButton',
  component: 'mars-button',
  argTypes: {
    onClick: { action: 'clicked' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    type: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'outline'],
      },
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  value?: string;
  variant?: string;
  slot?: TemplateResult;
  onClick: any;
  disabled?: boolean;
  type?: string;
}

const Template: Story<ArgTypes> = ({
  value = 'Hello world',
  slot,
  variant = '',
  onClick,
  disabled,
  type = '',
}: ArgTypes) => {
  return html`
    ${unsafeHTML(tagsFont)}
    <mars-button
      .value=${value}
      variant=${variant}
      @on-click=${onClick}
      ?disabled=${disabled}
      type=${type}
      >${slot}</mars-button
    >
  `;
};

export const Regular = Template.bind({});

export const CustomValue = Template.bind({});

CustomValue.args = {
  value: 'My value',
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<span>Slotted content</span>`,
};

SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
