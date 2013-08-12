<div id="background"><img /></div>


<div id="page-wrapper"><div id="page">


	<div class="nav">
		<div class="nav_wrap clearfix">
			<?php print render($page['nav_menu']); ?>
      <a class="open-nav" href="#"></a>
		</div>
	</div>

  <div id="header">
    <div id="header_wrap clearfix">
      <?php print render($page['header']); ?>
    </div>
  </div>

  <?php if ($messages): ?>
    <div id="messages"><div class="section clearfix">
      <?php print $messages; ?>
    </div></div> <!-- /.section, /#messages -->
  <?php endif; ?>

  <div id="main-wrapper" class="clearfix"><div id="main" class="clearfix">
    <div id="content" class="column"><div class="section">
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
	  <div class="title_box clearfix">
        <h1 class="title" id="page-title">
          <?php print $title; ?>
        </h1>
		<div class="title_img"></div>
		</div>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links">
          <?php print render($action_links); ?>
        </ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>

    </div></div> <!-- /.section, /#content -->

  </div></div> <!-- /#main, /#main-wrapper -->

</div></div> <!-- /#page, /#page-wrapper -->


  <div id="footer">
    <div id="footer_wrap">

        <?php print render($page['footer']); ?>

        <div id="footer_right">
          <span id="copyright">&copy; XIII Photography <?php echo date('Y'); ?></span>
          <span>|</span>
          <span id="site-by-cci">Site by <a href="http://ccistudios.com" target="_blank">CCI Studios</a></span>
        </div>
    </div>
  </div>