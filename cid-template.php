<html lang="en">
  <head>
    <?php wp_head(); ?>
    <link rel="stylesheet" href="<?php echo plugin_dir_url( __FILE__ ) . 'dist/App.css'; ?>" type="text/css" />
  </head>
  <body>
  <div id="App"></div>
  <script src="<?php echo plugin_dir_url( __FILE__ ) . 'dist/App.js?v=1.1.1'; ?>"></script>
  <?php wp_footer(); ?>
  </body>
</html>