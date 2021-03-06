import { html, TemplateResult } from 'lit-html';
import '../mars-radio-button.js';

export default {
  title: 'MarsRadioButton',
  component: 'mars-radio-button',
  argTypes: {
    onChage: { action: 'changed' },
    value: { control: 'text' },
    name: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    showCaption: { control: 'boolean' },
    caption: { control: 'text' },
    label: { control: 'text' },
    id: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
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
  name?: string;
  checked?: boolean;
  value?: string;
  variant?: string;
  onClick: any;
  disabled?: boolean;
  showCaption?: boolean;
  caption?: string;
  label?: string;
  id?: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  slot,
  value = '',
  name = '',
  checked = false,
  variant = '',
  onClick,
  disabled,
  caption = '',
  id = 'regularLabel',
  label = 'This is a label',
  showCaption = false,
}: ArgTypes) => html`
  <mars-radio-button
    .value=${value}
    .name=${name}
    .checked=${checked}
    .caption=${caption}
    .label=${label}
    .id=${id}
    variant=${variant}
    @on-click=${onClick}
    ?disabled=${disabled}
    ?show-caption=${showCaption}
  >
    ${slot}
  </mars-radio-button>
`;

export const Regular = Template.bind({});
export const CustomValue = Template.bind({});

CustomValue.args = {
  label: 'My value',
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<span>Slotted content</span>`,
};

SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
