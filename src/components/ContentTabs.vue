<template>
  <div class="content-tabs">
    <b-tabs lazy>
      <b-tab title="Dashboard" active>
        <b-card-group columns>
          <b-card title="Card title that wraps to a new line" img-top>
            <b-card-text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </b-card-text>
          </b-card>

          <b-card header="Quote">
            <blockquote class="blockquote mb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </b-card>

          <b-card title="Title" img-top>
            <b-card-text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>
            <b-card-text class="small text-muted"
              >Last updated 3 mins ago</b-card-text
            >
          </b-card>

          <b-card bg-variant="primary" text-variant="white">
            <blockquote class="card-blockquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer>
                <small
                  >Someone famous in
                  <cite title="Source Title">Source Title</cite></small
                >
              </footer>
            </blockquote>
          </b-card>

          <b-card>
            <b-card-title>Title</b-card-title>
            <b-card-text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>
            <b-card-text class="small text-muted"
              >Last updated 3 mins ago</b-card-text
            >
          </b-card>

          <b-card img-alt="Image" overlay></b-card>

          <b-card
            img-alt="Image"
            img-top
            bg-variant="secondary"
            text-variant="white"
          >
            <b-card-text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first.
            </b-card-text>
            <template #footer>
              <small class="text-muted">Footer Text</small>
            </template>
          </b-card>
        </b-card-group>
      </b-tab>
      <b-tab title="Workspace"><p>Workspace</p></b-tab>
      <b-tab title="Datasource"><p>Datasource</p></b-tab>
      <b-tab title="Settings"><p>Settings</p></b-tab>

      <template #tabs-start>
        <div class="page-title">
          <span>IMR</span>
        </div>
      </template>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: "ContentTabs",
};
</script>
