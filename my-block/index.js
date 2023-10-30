/**
 * BLOCK: BLOCK NAME
 */

import { default as Edit } from './edit.js';
import { default as Icons } from './icons.js';
import { default as Metadata } from './block.json';

const BlockName = ( () => {

  const { registerBlockType } = wp.blocks;

  registerBlockType( Metadata, {
    icon: Icons.block,

    // Edit UI.
    edit: ( props ) => {
      return ( Edit( props ) );
    },

    // Front-end UI; rendered in PHP.
    save: () => {
      return null;
    }
  } );

} )();

export default BlockName;
