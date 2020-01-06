/**
 * BLOCK: BLOCK_NAME
 */

import guBLOCKIcons from './icons.js';
import guBLOCKDeprecated from './deprecated.js';

( function() {

  const { registerBlockType } = wp.blocks;
  const { PanelBody, TextControl } = wp.components;
  const { InspectorControls } = wp.blockEditor;
  const { Fragment } = wp.element;

  registerBlockType( 'gu/BLOCK', {
    title: 'BLOCK NAME',
    description: '',
    category: 'common',
    icon: guBLOCKIcons.block,
    deprecated: guBLOCKDeprecated,

    // Remove ability to have a custom class name.
    supports: {
      customClassName: false
    },

    // Block attribute data.
    attributes: {
      data: { default: '' }
    },

    /**
     * Edit UI and functionality.
     */

    edit: ( props ) => {
      // Get the values needed from props.
      const { isSelected, setAttributes } = props;
      const { data } = props.attributes;

      // Declare change event handlers.
      const onChangeData = ( value ) => { setAttributes( { data: value } ) };

      // Return the edit UI.
      return (
        <Fragment>
          { isSelected && (
            <InspectorControls>

              <PanelBody>
                <p>Something goes here.</p>
              </PanelBody>

            </InspectorControls>
          ) }

          <div>
            <TextControl
              label='Data'
              value={ data }
              onChange={ onChangeData }
            />
          </div>
        </Fragment>
      );
    },

    /**
     * Front-end UI.
     */

    save: ( props ) => {
      // Get the attribute values needed from props.
      const { data } = props.attributes;

      // Return the front-end HTML.
      return (
        <div>
          <p>{ data }</p>
        </div>
      );
    }
  });

})();
