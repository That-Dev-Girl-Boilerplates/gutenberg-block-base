/**
 * EDIT: My Block
 */

const MyBlockEdit = ( props ) => {

  // WP editor components.
  const { PanelBody, TextControl } = wp.components;
  const { InspectorControls } = wp.blockEditor;
  const { Fragment } = wp.element;

  // Block values from props.
  const { setAttributes } = props;
  const { content } = props.attributes;

  // Change event handlers.
  const onChangeContent = ( value ) => { setAttributes( { content: value } ) };

  // Return the edit UI.
  return (
    <Fragment>

      <InspectorControls>

        <PanelBody title="Panel title">
          <p>Something goes here.</p>
        </PanelBody>

      </InspectorControls>

      // Edit UI in the editor.
      <TextControl
        label='Content'
        value={ content }
        onChange={ onChangeContent }
      />

    </Fragment>
  );

};

export default MyBlockEdit;
