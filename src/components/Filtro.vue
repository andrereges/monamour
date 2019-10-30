<template>
  <div class="q-pa-md">
    <q-btn-group spread>
      <q-btn rounded color="primary" label="One" />
      <q-btn rounded color="primary" label="Two" />
      <q-btn-dropdown auto-close rounded color="primary" label="Three" split>
        <!-- dropdown content goes here -->
        <q-list padding style="width: 250px">
          <q-item clickable>
            <q-item-section avatar>
              <q-avatar icon="folder" color="purple" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Photos</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" color="amber" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-btn-group>
  </div>
</template>
