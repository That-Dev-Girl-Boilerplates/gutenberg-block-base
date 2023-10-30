<?php

/**
 * My Block
 *
 * Registration and render functionality for BLOCK NAME.
 */

namespace TDG\Blocks;

class BlockName {

  /**
   * __construct()
   */
  public function __construct() {
    add_action( 'init', [ $this, 'register' ] );
  }


  /**
   * register()
   *
   * @return void
   */
  public function register(): void {
    register_block_type( __DIR__, [
      'render_callback' => [ $this, 'render' ]
    ] );
  }


  /**
   * render()
   *
   * @param array $attributes
   * 
   * @return string
   */
  public function render( array $attributes ): string {
    // Get block attribute data, for reading ease.
    $content = $attributes['content'];

    // Construct the block's HTML.
    return <<<HTML
<p>
  $content
</p>

HTML;
  }

}

new BlockName;
