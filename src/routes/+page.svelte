<div class="flex-container">
	<div class="content-box">
	    <img class="thumbnail" src="/images/308435779_496065872526902_6482317408610972652_n.jpg" alt="Casa Mede">
	    <p style="text-align: center; margin-top: 8px;">Casa Mede</p>
	</div>
	<div class="content-box">
		<img class="thumbnail" src="/images/111217892_599978294281772_7222407695774969581_n.jpg" alt="Casa Cisa">
		<p style="text-align: center; margin-top: 8px;">Casa Cisa</p>
	</div>
</div>

<script>
    // This variable automatically receives the 'return' value 
    // from the +page.server.js file!
    export let form; 
</script>

<div id="contact" class="contact-wrapper">
    <h2 style="text-align: center;">Contact Us</h2>

    {#if form?.success}
        <div style="background: #d4edda; color: #155724; padding: 15px; border-radius: 5px; text-align: center; margin-bottom: 20px;">
            <strong>Success!</strong> We have received your message and will reply shortly.
        </div>
    {:else if form?.success === false}
        <div style="background: #f8d7da; color: #721c24; padding: 15px; border-radius: 5px; text-align: center; margin-bottom: 20px;">
            <strong>Error!</strong> Something went wrong. Please call us instead.
        </div>
    {/if}

    <form class="contact-form" method="POST">
        
        <label>NAME: <input type="text" name="user_name" required></label>
        <label>EMAIL: <input type="email" name="user_email" required></label>
        <label>PHONE: <input type="tel" name="user_phone"></label>
        <label>NOTE: <textarea name="user_message" rows="5" required></textarea></label>

        <button type="submit">SEND MESSAGE</button>

    </form>
</div>