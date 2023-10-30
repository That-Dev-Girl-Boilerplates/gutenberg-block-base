/**
 * EDIT: BLOCK NAME
 */

const BlockNameEdit = ( props ) => {

  /*
   * Get required components from core.
   */
  const { PanelBody, TextControl } = wp.components;
  const { InspectorControls, useBlockProps } = wp.blockEditor;


  /*
   * Set of allowed child blocks _(optional)_
   */
  //const allowedBlocks = [ 'tdg/child-block-name' ];


  /*
   * Get block properties.
   */
  const { setAttributes } = props;
  const { content } = props.attributes;
  const blockProps = useBlockProps();


  /*
   * Template for child blocks _(optional)_.
   * The block initializes with 3 child item blocks.
   */
  // const getTemplate = memoize( () => {
  //   return times( 3, () => [ 'tdg/child-block-name' ] );
  // } );


  /*
   * Set change event handlers.
   */
  const onChangeContent = ( value ) => { setAttributes( { content: value } ) };


  // Return the edit UI.
  return (
    <div { ...blockProps }>

      { /* Inspector area customizations. */}
      <InspectorControls>

        <PanelBody title='Panel title' initialOpen={ true }>
          <p>Something goes here.</p>
        </PanelBody>

      </InspectorControls>

      { /* Editor interface. */}
      <TextControl
        label='Content'
        value={ content }
        onChange={ onChangeContent }
      />

    </div>
  );

};

export default BlockNameEdit;
