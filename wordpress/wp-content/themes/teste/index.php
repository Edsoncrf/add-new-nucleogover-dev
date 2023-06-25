<?php
get_header();
?>

<div class="content">
   <div class="bloco-postagens">
      <?php
      $args = array(
         'post_type' => 'post',
         'posts_per_page' => 5
      );
      $query = new WP_Query($args);

      if ($query->have_posts()) {
         while ($query->have_posts()) {
            $query->the_post();
            ?>
            <div class="post-card">
               <?php if (has_post_thumbnail()) : ?>
                  <div class="thumbnail">
                     <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
                  </div>
               <?php endif; ?>
               <h2 class="post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
               <a class="leia-mais" href="<?php the_permalink(); ?>">Leia mais</a>
            </div>
            <?php
         }
      }
      wp_reset_postdata();
      ?>
   </div>
</div>

<?php
get_footer();
?>
