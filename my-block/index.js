/**
 * BLOCK: My Block
 */

import MyBlockEdit from './edit.js';
import MyBlockIcons from './icons.js';

const MyBlock = ( () => {

  const { registerBlockType } = wp.blocks;

  registerBlockType( 'tdg/my-block', {
    title: 'BLOCK NAME',
    description: '',
    category: 'common',
    icon: MyBlockIcons.block,
    example: { attributes: {} }, // Show default example.

    // Remove ability to have a custom class name.
    supports: {
      customClassName: false
    },

    edit: ( props ) => {
      return ( MyBlockEdit( props ) );
    },

    // Dynamic block rendered in the PHP.
    save: () => {
      return null;
    }
  } );

} )();

export default MyBlock;
