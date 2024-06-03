import { FieldAppSDK } from '@contentful/app-sdk';
import { Paragraph, TextInput } from '@contentful/f36-components';
import { MathJaxContext, MathJax } from 'better-react-mathjax';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Field = () => {
  const sdk = useSDK<FieldAppSDK>();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/

  // I am not using the CMA here to get/set values for this quick demo proof of concept.
  // If this were implemented, we'd just use the CMA to get the value of the field and
  // render it both in the default value as well as in the MathJax component.
  // We'd need to uncomment the useCMA declaration on line 4.
  return (<div>
    <TextInput
      value="\\(\\frac{10}{4x} \\approx 2^{12}\\)"
    />
    <br />
    <h2>Preview</h2>
    <MathJaxContext>
          <MathJax>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax>
    </MathJaxContext>
    </div>);
};

export default Field;
