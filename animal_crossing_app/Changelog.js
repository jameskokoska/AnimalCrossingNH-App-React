export const gameVersion = ["2.0.0","2.0.4"]
export const dataVersion = "5"
export const museumCategories = ["Fish","Insects","Sea Creatures","Fossils","Art"]
//-If you would like to help translate the app, feel free to get in touch via email!
export const changelog = `
-Fixed ToDo list item crash when selecting custom icon that does not exist
-
-Added the ability to add custom icons in the ToDo list
-Search crafting materials, villagers, reactions and tools as icons
-
-Tap the source in the top left of an item popup to read more
-Fixed how item variations work
-Item variations now always refer to the main item, not the variation
-This helps to avoid confusion when checking off other items
-The wishlist still refers to item variations specefically however
-Fixed bug where some variations wouldn't appear
-Fixed bug where item variations were in a random order
-
-Added safety net:
-If the app breaks, you can still recover your data before reinstalling
-
-Added and revamped icons for creature sources
-
-Added a music player to the Songs page!
-Play Hourly BGM or K.K. songs
-Music will play in the background while you use the app as well!
-
-Fixed events with no items associated with it
-Updated translations
-
-
-Added View Craftable Items into fish/bugs/sea creatures popup (at bottom)
-Popup height adjustments
-
-Added times and months the creature is active (in text)
-Crash fixes for popups
-Fixed translations
-
-Added customizable Collection count section!
-Tweaked location of remove and reorder buttons for lists
-When tool reaches 0 durability, reset durability button is shown automatically
-Stability improvements
-Fixed tapping Sea Creatures and Bugs mixed up for Collection count section
-Fixed null value in Tool durability section
-Fixed Toast message crash
-Added animation delay to collection list animation when reordered
-
-TV Guide page!
-Added requires high friendship filter for Reactions
-Added icon and info if there is custom customization item required (instead of DIY kit)
-Added Gyroid collection count
-Can refresh list if sort by Collected filters are active
-Added Sort by... Collected filter to more pages
-Updated translations
-
-Fixed ToDo list adding item crash
-Fixed store hours at 5AM
-
-Added C.J. and Flick sell prices to Fish and Bugs
-Can now sort on more pages
-Added Sort by... Collected option
-Updated privacy policy link in About page
-Catalog import supports link with/without 'https://'
-Catalog import loading indicator
-UI and icon Adjustments
-
-Tap / long press any image on item popup to view larger image
-Fixed flimsy net and flimsy fishing rod durability
-
-Past changes:
-
-Backup now supports Turnip prices and ToDo list
-Added [Battery saver / Increase performance] setting
-Added erase profile to profile page
-Added collection count for each profile on profile page
-Tap in empty space to dismiss popups
-Active creatures information popup
-Profile page optimizations
-Songs page has no animation when on battery saver
-Fixed paradise planning crash
-Improved speed of opening an item when list page has just loaded
-Updated translations
-Older device popup - to improve speed
-Import and Export all app data
- Useful when switching phones!
- This is not a replacement for the normal backup
-Fixed restoring turnip log (only restores current profile)
-Fixed restoring To Do list (only restores current profile)
-Erase profile data now removes more than just the collection
-
-Home page loading time improvements
-Fixed missing translation crash
-Villager compatibility loading animation
-About page optimizations
-
-Fixed some filters not working - infinite loading
-Optimizations to internal memory handling
-Faster sorting and loading of data
-Added Villager filter for Amiibo Cards
-Fixed importing of data crash when no file selected
-Fixed missing images
-
-Added Happy Home Network ID to profile
-Happy Home Network ID and Creator code are included in the backup service
-Fixed crash on Paradise Planning page
-Fixed flimsy net durability
-
-Bug and crash fixes
-Back button fixes
-Back button is more consistent in UI
-
-Removed scrolling lag on home page
-Updated animation to use native drivers
-Improved performance of animations
-Added entry count to Paradise Planning page
-
-Added Tool Durability tracking as Home Page section
-Added Shooting Star counter as Home Page section
- Tap [Edit Sections] to enable these features
-Added animations to Collection progress
-Added animations to Loan Tracking
-Added filters to Quick Search
-Loan input shows input keyboard automatically
-Filters now sorted in alphabetical order
-Removed Active Creatures shortcut on Home page
-Updated translations
-Added Personality filters and data to Amiibo Cards
-Fixed Amiibo cards missing images
-Fixed popup background wrong size on some devices
-Color changes and fixes
-Fixed event colors for Southern Hemisphere
-Package updates
-
-Added Quick Search on home screen, swipe down on home page to instantly search All Items
-Improved search for Achievements page
-
-Added Sound Type filters for Gyroids
-Fixed Poki prices showing when there are none
-Added hours of Harvey's islands shop
-You can tap store hours to see what items are available from each
-
-Updated database
-Huge performance improvements
-Added Poki prices
-Added Exchange Currency filters
-Added new Zodiac items
-Fixed wishlist icon for creatures and villagers
-Decreased size of flower's page headers
-Fixed missing Amiibo card images
-Updated translations
-Added item count at bottom of list
-Faster loading times
-Faster collection counting
-Faster wishlist loading
-Improved performance for large collections
-Fixed capitalizations
-Formatting/UI fixes
-Fixed crashes when searching on some pages
-Fixed importing of data from cloud backups
-
-Added ability to invert filters/filter out items
-Option located at the bottom of each filters list
-
-Fixed events that go over the year in length
-
-Significantly improved the speed of how translations are loaded
-Added sorting for Food and Materials page
-Added new event icons
-Updated translations
-
-Fixed clear search when unfocused
-Added back sort by villager birthday (removed by accident)
-Fixed sorting by Buy Price in Everything page
-Removed sort by filters that don't exist for that page
-Added sort by filters for Art, Fossils, Tools pages
-Added color info for Art, Fossils, Tools popups
-
-Added clear input text button to search bar
-Improved text colors for search
-Improved 'event items' pages
- Fixed any missing items for events
-
-Current villagers sort alphabetically
-Updated translations
-
-Added ordinances! Select it in the Settings page
-Popup Changelog won't appear when new user first opens the app
-Importing a large file backup now has loading prompt
-Added catch error for Paradise Planning page. Please report this bug if it occurs.
-Fixed villager name translation for notifications
-Added loading bar when database is counting collection (for large collections only)
-Removed sorting filters for items pages that it doesn't apply to
-Added popup for info on how to add villagers in your town (only appears once)
-Cloud backup service verifies data in a better way to ensure successful upload
-
-If avoiding spoilers, villager image will show for past villagers and if you collected their photo
-Fixed date on Letters page, flipped based on language
-Added 'Automatically collect when donated to Museum' setting
-Package updates
-
-Fix for turnip log not remembering 'last week's pattern' and 'first time buyer'
-Can sort villagers by birthdays (in villager page)
-
-Updated About page
-Hot fix: Fixed Reaction page filters
-
-Renamed Emoticons to Reactions
-Fixed sidebar menu buttons
-Avoid spoilers will show image when at least one variation collected
-Improved reordering of ToDo list - when using Edit List
-ToDo list adds new villagers to your list automatically
-ToDo list asks before hiding talk to villagers list
-Fixed translations for villager names on ToDo list
-Updated translations
-Added View Craftable recipes for materials such as flour, sugar etc
-Made view spoiler warning smaller on header
-Added category info to item popups (housewares, ceiling decor, tops, hats etc.)
-Fixed keyboard resizing elements on Android
-
-In the collection progress
- You can tap each category to go to its page
-Custom time selector now defaults to the last chosen time
-Added option for ToDo list to reset everyday at 5am
-Added ToDo list menu
-Improved drop down menu selection
-Improved scrolling on profile and home screen
-Fixed bug with scrolling and text input
-
-Added filter for cooking and crafting recipes
-Fixed formatting on landscape/tablets
-Fixed notification icon (Play Store update required)
-Adjusted colors of UI elements for color blind (in creature popups)
-Adjusted font size
-Rearranged text on furniture popup
-Events now use the correct year
-Note: Past event days from previous years are not supported
-
-Added Achievement progress to profile page
-Font size fixes
-Prompts if you want to delete that ToDo item
-Spaced out ToDo touch targets for small items
-Decreased header height
-Recipe ingredients now in separated box
-Fixed status bar on some phones
-Added reset password button on Backup page
-Updated translations
-
-Header fades in better when loaded
-Fixed translations for villagers birthdays
-Fixed open drawer crash on calendar page
-Fixed calendar formatting on some phones
-Improved buttons for calendar page
-Fixed lag when switching months on calendar page
-
-You can now edit the name and icon of ToDo list items
-Improved auto backups popup significantly
-Made Turnip Log fit better
-Added app version and database version at bottom of settings page
-
-Fixed Collection totals double counting some items
-Updated fossil bones icon
-Updated icons on side menu
-Fixed side menu colors
-Removed Hazure songs from list
-
-When you can't navigate back on Guide page, it will open the side menu
-Turnip Prophet now opens inside the apps browser
-To open the side menu on the home page, only swipe on the left edge now
-Bottom Floating Menu Action Button now stays in place
-Added back animation to Floating Menu Action Button
-Increased resolution of turnip icon
-
-Collection totals no longer include variations of items
- This is because Cyrus can customize anything now
-Fixed collection totals
-Added way more ToDo list icons
-Added more Source icons
-Collection totals now load properly (might take some time to count)
-Data can now be downloaded instead of generated
- For those who have issues of infinite data generation
-Fixed center text
-Added more help text on villager page
-Can tap blank space above popup to close it
-Color fixes
-Updated translations
-Adjusted heights of some popups
-
-Quick fix: crash on different lists
-Fixed variation popups for items with missing images
-Fixed villager name translations
-Can check off Paradise Planning items
-Paradise Planning checklist backed up to cloud and restored
-Added filters to Paradise Planning
-
-Updated database
-Added Interior Structures to Construction page
-Added Counter and Pillar filters
-Fixed partially collected variations indicator for pattern items
-Added Gyroid sound type to popup
-Added Cyrus customization price to popups
-Updated translations
-Updated dates for events
-Updated icons
-
-Quick fix: Unobtainable DIYs tab crash
-Profile and Island name not translated
-Villager names on Paradise Planning translated
-
-Quick fix: View craftable items button crash
-View craftable items only appears if there are items that can be crafted
-Wishlist should now load almost instantly
-New Items page loading improvements
-General Performance improvements:
-  Filtering, selecting items and scrolling
-  Switching pages and navigating
-
-Added Paradise Planning page 
-Added gender filters for villagers
-Added View Recipe button in item popup
-Recipe page now on its own
-Added Recipe icon for items
-Museum and Crafting page icon change
-Tools moved to Construction page
-Added more ToDo list icons
-Fixed AM/PM for clock
-Added more Source icons
-Fixed Favorite Song for Villagers
-Added Umbrella to Villager's Furniture page
-Added Song to Villager's Furniture page
-Improved the About page
-
-Added more ToDo list icons
-Updated visitor icons
-Updated translations
-Changed order of date for different languages
-Portuguese language now loads significantly faster
-
-Added help text for adding villagers
-In variation popup - added which villagers like that item as a gift (for clothing)
-Long press a variation to view more details
-Updated data
-Updated total items for collections progress
-Added fence filter in Construction page
-Added fence variations and house exteriors
-Added loading indicator when searching through large lists
-Updated translations
-Lists now load as you scroll to improve performance
-Fixed alphabetical order
-Fixed header not appearing when search
-
-Updated translationsfor items!
-Added All Amiibo Series 5 Cards
-Fixed Amiibo Search (multiple with the same name)
-Updated filters
-Improved loading times
-Improved Visitors History date display
-Added Amiibo to Everything page
-Added filters to New Items page
-Added Source cooking icon
-
-Fixed art popup
-Added Food tab (in items page) and Food items (in addition to recipes)
-Fixed catalog scanner
-
-Loading times have increased due to a larger database
-The database is now loaded into memory when updated
-Added items from the new update
-This will get updated with more data as it comes!
-Translations will come soon
-Added Gyroids page
-Added Food Recipes
-Added Ceiling furniture
-You can view all the new items in the [New Items] page
-Fixed Calendar Page current date
-Fixed Buy amount for some recipes
-
-Thank you to the ACNH Spreadsheet team for all the hard work!!!
-
-Updated translations and descriptions
-Fixed event items page not showing some items (e.g. Turkey Day)
-Fixed backup popup crash
-
-A checkmark will appear on the event if you collected all the items!
-Events and Homepage load faster (background loading)
-Fixed collection totals in profile section
-Added Pier icon
-Fixed search - can now search with one letter/character
-Search is faster
-Added Underwater as Source for Sea Creatures in popup
-Fixed hide spoilers for images in Songs page
-Decreased left and right padding for lists
-Added DIY Icon for DIYs (On everything page)
-Added Pascal, star fragments, mushroom, pine cone, gyroid, and seashells to To-Do list icons
-Added [View Craftable items] button to materials
- View which items you can craft with that material!
-Current day is highlighted in Calender View 
-Enabled filters in Items of Event page
-Removed Colored lists Setting, always on now
-Removed Show empty check marks Setting, always on now
-Removed Show donated to museum button Setting, always on now
-Improved Not Collected filter
-Added Not Collected (Keep variations) Filter (old behaviour)
-
-Remade Calendar and Events page
-Significantly improved navigation between pages
-Added speaker type and lighting type filters
-
-Added [Show All Events Happening Today] option on the events section of the home page
-Can see all events that are happening currently, even if the beginning initial day passed
-Fixed Southern Hemisphere events
-Added Pascal icon
-Backup now prompts if you want to replace current cloud backup
-Added collection progress for Furniture and Clothing
-Switched what the arrows do in Calendar + Events Calendar view page
-Added Furniture, Floor & Walls, and Clothing to Collection Progress
-Fixed FAB position on some pages
-
-Fixed ToDo list add villagers information
-Fixed back button not going to previous screen
-Events now scrolls to top of page when selected a date
-Settings page doesn't reload every switch
-Fixed rating and cloud backup popup info from popping up nonstop
-Fixed importing of profile info not displaying properly when restoring a backup
-
-Added more translations
-Added villager genders in popup
-Removed the ability to enter a space in email (again)
-Fixed formatting of some text
-Added hide spoilers setting
-Added villager photo checklist tracking (When you've best friended a villager and get their photo)
-Fixed bug with backups and achievements
-Achievements are merged with existing when importing
-Added cloud backup prompt
-Added privacy policy to About page
-Fixed colors
-Fixed hit boxes of checkmarks
-Removed the ability to enter a space in email
-Added auto backup switch on manage data page
-
-Added cloud backups
-Added auto backups (can be enabled in settings)
-Auto backups will backup every time you open the app!
-
-Changed the way the sidebar preferences are saved
-Sorry this update reset your preferences!
-Added Game Version added filter for [Everything] page
-Can use back button to close slide in popups
-Added crack and glowing hole To-Do icons
-Updated game data
-Can check off flowers from flower guide
-Added revealed Amiibo cards (series 5)
-Added Gyroids page and Ordinance page (In preparation for update)
-Added more translations
-Can search a '-' (dash) with a space in the search bar
-
-Added more player icons for profile
-
-Added Portuguese language translations (no items)
-Added separate Backup and Import data page
-Reset order of side menu drawer pages, sorry!
-Fixed bug with German translation
-
-Added past resident button to villagers
-Added respective filters
-Added event selection for past resident birthdays
-Fixed default page as Everything
-Fixed checkmark synchronization after checking variation
-
-Wishlist page can now be refreshed
-Long press a variation and add it to your wishlist!
-You can see if a variation is on your wishlist in the popup!
-Fixed checkmarks and wishlist indicator not syncing correctly for list items
-
-Use larger images in popup setting now applies to variations
-Fixed bug where it would sometimes indicate you have a variation, even though you unselected it
-Fixed variation indicator when whole set completed - now shows green dot
-
-Changed how dashes are sorted alphabetically
-Updated translations
-
-Added clear prices to Turnip Log
-Can now change the order of the sidebar menu (Edit Pages - at bottom of sidebar)
-Can now change the order of sections on home page (Edit Sections - at right of home page)
-
-Active Creatures section moved to a separate page
-Updated and fixed translations (specifically catchphrases)
-Added Label Themes into filters
-Added Label icon in clothes popup
-Added the ability to pull down to refresh a list
- This can be useful if you check something off and have a Collected filter applied, and you want to update the filters applied
-
-Fixed refresh icon colors
-Fixed icons for events on home page
-Added help text for Active Creatures page
-
-Updated translations
-Added MeteoNook page (in sidebar)
-
-Fixed calendar page again
-Changed icons for events
- 
-Italian translation started
-Updated translations
-
-Fixed last week indicator for visitors
-Short form for week day names are used for visitors now
-
-Updated translations
-Fixed capitalizations, notification translations
-
-Added new item translations
-Fixed event translations
-
-[Compress variations into a scrollable list] setting now defaults to off
-[Enable haptic feedback] setting now defaults to off
-
-Fixed firework event day
-
-Backing up to a text document now works on Android 11 and all versions
-Fixed active time for creatures (the last hour got included by accident)
-Donated to museum filters now only show museum items
-Updated translations
-
-Emergency crash fix when viewing info on some items (umbrellas)
-Sorry for the bug :(
-
-Emergency crash fix when checking off variations
-Sorry about the inconvenience and thank you to the people who pointed it out to me :)
-Added spawn rates to creature popups
-
-Added ability to hide/show uncraftable item variations
-Added information on what can be customized in the furniture popup (body/pattern)
-Added filter for partially collected items
-Fixed [Show craftable item variations] filter
-Russian app translations (~85% complete)
-Thanks for helping!
-
-Total of 5 other profiles are now supported (Main, and 4 others)
-
-Added new items from the update
-
-Fixed fireworks show date
-
-Updated translations
-You can now see which of your favorite villagers like a clothing item as a gift
-View this in clothing item popups at the bottom
-
-Fixed bug where active creatures with 2 different times didn't show up under the active creature section
-
-Significantly improved tablet support
-Fixed issue with ghost touches when loading - more items are initially loaded before rendered (unfortunately slight increase in load times)
-Fixed dream address starting with DW instead of DA
-
-Added filtering in vilager gift guide pages
-Added Collected/Wishlist/Sorting filters
-
-Added Russian translations, thanks Alex!
-
-Fixed museum filters showing up in pages where it shouldn't be
-Museum filters are in it's own category now
-
-Added Amiibo about popup - redirect to guide
-Fixed filters crash if applied from memory and don't exist
-Fixed collection count
-Fixed sorting filters
-Color fixes
-Text fixes
-
-Added Sorting in filters menu
-Can sort by category, sell price, buy price, color, and tag
-Added museum collection buttons
-Click the button to mark it off as donated to the museum
-You can disable this feature in the settings menu
-Updated translations, fixed some text not translated
-Formatting fixes
-Fixed icon shapes
-Fixes for some colors
-
-Filters now stack with other filters
-Filters only stack within different categories of filters
-Updated translations
-Fixed Uncraftable item variations filter
-German now loads if default language is German
-
-Added creator code to profile section
-Fixed friend code and dream address not saving for different profiles
-Fixed notification translations
-
-Major translations added
-German translation is no longer work in progress (about 95% of translations completed)
-Spanish translation is no longer work in progress (about 85% of translations completed)
-Thank you everyone for helping with the translations so far!
-Updated game data and art/sculpture images
-High resolution art pictures are pulled from an online server
-Reduced app download size
-Added Real Artwork Title to art popup 
-Lists are now sorted alphabetically by default (go to settings if it is disabled to enable this)
-Added setup profile text to indicate where to setup profile info
-
-Added Amiibos to Wishlist
-Added Amiibos to Everything page
-Added setting images - tap some settings to see a preview of what it does
-
-
-Time icon now shows in corner if NPC visitor visited last week in Visitors section
-Improvements to NPC Visitors section
-Updated translations
-Updated game data
-Added filters for active creatures
-Fixed clear all set filters
-Added special translations for German
-Added more German translations and Spanish translations
-Fixed todo list item width
-Tablet changes are not guaranteed - I do not have a tablet to test :( 
-Max size for sidebar menu on tablets
-Added maxwidth for side menu
-Added maxheight for list pages
-Centered landscape view on home page
-You can now add talk to villagers in the checklist (Tap Show talk to villagers list)
-
-Added Amiibo Cards page
-Added profile icons
-Added profile page, tap your profile icon to get an island summary!
-Added Museum icon
-Fixed bug with changing name not syncing between profiles
-Removed bottom tab bar setting
-
-You can now show/hide pages on the sidebar
-Scroll to the bottom and tap Edit Pages
-Since not everyone needs a list of all the letters for example
-Fixed bug with reordering not saving list
-Fixed bug where changing name/island name in profile did not sync properly
-Turnip Tracking is now separate
-Dream address and friend code always enabled in profile now
-
-Added profiles! You can now have multiple islands/characters with different collections and data
-Check this out in the [Profiles/Islands] page
-Added share functionality to wishlist
-Added Loan tracking to home screen
-Improved backing up data
-Added more translations
-
-Added 1.10.0 items
-Updated New Items page
-Added and updated events
-Added May Day icon
-Added more translations
-Fixed bug with source translations not getting translated for multiple sources
-Fixed bug with wrong font used
-Fixed bug with default to-do list out of order
-Fixed bug with art collection counter
-
-Fixed title categories not fitting in some languages
-Fixed show uncraftable variations broken for some items with customizable patterns but not main colours
-Fixed button text not being centered on overflow
-
-Added heart crystals exchange currency in popups
-Added ability to reorder task list - Tap [Edit list] or long press a task
-Added better filter support
-Fixed K.K. event - now pushed back if there is a bug-off/fishing tourney
-Fixed fireworks icon
-Fixed painting collection counter
-Added filters for wishlist
-Added more translations
-Started German translations
- Thanks Ännchen!
-
-Significantly improved load times for tabs
-Improved loading times for filters
-Added category filters
-Updated game data - small fixes
-Fix: Changelog should not appear on other pages
-
-Creature time is now always shown
-If the creature cannot be caught in the current month, time is in red
-Fixed setting custom time
-Can now backup to clipboard/import from clipboard
-This is a fix for Android 11 or above devices as changes to the way files can be accessed has been restricted
-
-Fixed bug with backup data
-Updated backend SDK
-Backing up data now no longer asks for camera permission on older Android versions
-Backup folder changed to /Pictures/ACNHPocketGuide instead of downloads folder
-
-Fixed translations
-Rewrote how translations are handled again, hopefully it's faster now!
-Updated translations
-Significantly improved load times of lists
-
-Fixed alphabetical ordering - now applies to all sections
-Added indicator is not all variations checked off
-Added setting to remove the variations scroll - this is to avoid a bug with gestures on some devices
-Added actual checkmark to mystery islands page
-Current price highlighted in turnip log
-Added a way to easily clear all entered turnip prices
-Fixed variations crash
-Fixed variation missing indicator position
-Significant performance improvements for finding item variations
-Fixed critterpedia sorting
-Fixed row component heights
-Fixed progress bars
-Fixed the way variations converge - lists should load significantly faster
-Fixed information button on Obtainable Items page
-Added pattern name to variation popup (long press a variation)
-Updated French translations
- Thanks Christophe!
-
-Added sort by Critterpedia option for Museum pages
-Added villager compatibility - See which villagers get along the best with others
-Added warning to villager compatibility page - This is not yet confirmed to be accurate and should only be used as a reference
-Added more information about villagers redirect
-Added more Spanish translations, more coming soon
- Thanks Vicente, adrisniper7, Robertin, and miyo0i!
-
-Reworked how translations are handled internally
-Fixed 24 hour clock display 12 for midnight instead of 0:00
-Fixed crash for active creatures
-
-Fixed timezone issue with events
-Fixed issue with special events and hemisphere (specifically the Bug-off)
-Fixed crashes
-Added more info redirect under Visitors section
-Added translations to Season/Events in popups
-Fixed issue with villagers gift being the wrong guide redirect
-Fixed issue with Changelog, should now close when changing pages/back button
-Fixed translation crash issues with missing translation
-
-Fixed dream address in French
-Fixed alphabetical sorting for accented words
-
-Empty check marks are now shown so you can check off items faster, disable this to slightly improve loading times
-You can tap a villagers birthday event to see details about that villager
-Added redirect/info popup to read more about gifts from gifts page and What are villager gifts popup
-Backup data now backups achievements and profile information too
-Fixed color displaying even though there is 'None' in different languages
-Fixed check mark sync on variations
-Filters don't attempt to load if the page does not have any filters
-Fixed K.K. slider event time
-
-You can now view what items you can get from events by tapping them!
-Reworked how back button works - enable Back button to previous page
-Added Season/Event info in item popups
-Fixed crash to see villagers furniture that doesn't yet exist in the database
-Added not found error screen
-Added more redirects and info to ACNH Guide + FAQ page
-Fixed event highlighting on calendar page
-Reworked how the sidebar is loaded internally
-Fixed villagers furniture sometimes having wrong entries
-Fixed DIYs sometime displaying wrong selling price for the crafted item
-Updated translations
-Fixed villager name translation on home page
-
-Color fixes for events
-Your villagers birthdays are now highlighted in the Events section
-24 hour time fixes
-Updated translations and changed how translations are handles for events
-Reordered which events are shown first of each day (in this order: Birthdays, Special events (special), Game events, Repeat events)
-
-Added event notifications!
-Added Visitors section - this will help you predict and keep track of who will visit next
-Added Visitors history
-Re-created the Events section
-Day of the week is now used instead of month
-More events displayed!
-Villager furniture - view what furniture is the default for a villagers house
-Customize which events are shown and which notifications to get, go to [Edit Events] in the [Events] section of the home page
-Changed DIY price to item price in DIY popup
-Notification bar now colours to theme (when enabled in settings)
-Fixed obtainable items crash
-Possibly fixed custom time setting?
-Custom time is now an offset, it will progress relative to real time but be offset by the selected date
-Can sort/unsort tasks
-Haptic feedback for visitor page fix
-Sorry for the bugs recently, I didn't notice I was pushing updates over the air
-
-Added recipes collection progress
-Can zoom in on artwork - tap the artwork in the popup and pinch to zoom
-
-Cleaner villagers section in profile
-Pushed all information in a popup in obtainable items page
-Color fixes
-Long press a to-do item to remove it
-
-Thanks for 5K downloads... that's incredible!
-Added way to see what DIYs and Reactions you can get from your current villagers
-Added way to see what DIYs and Reactions you cannot get from your villagers
-Added new [Obtainable Items] page
-Added information about this under the profile section on the home screen
-Added museum descriptions to museum items popup
-Added furniture size icons to items popup
-Updated game data
-Improved loading times of lists
-Accented characters are ignored in search
-Show/Hide turnip log moved to [Edit sections]
-Can set Dream Address and Friend Code in profile
-These sections can be hidden in [Edit Sections]
-Can set your island fruit in profile
-Delete saved/downloaded images button in settings (to reclaim storage space)
-Added more translations
-Changed design of buttons
-Fix back button crash on launch
-Added haptic feedback to [Edit Sections]
-Fixes to [Edit Sections]
-More color fixes
-Removed useless code to reduce file size
-Bug fixes to home screen
-Fixed searching DIYs in Everything page
-Added NookLink exchange prices and icons
-Fixed purchasing and selling prices mixup in popups
-Main changelog is shorter, moved longer one to About page 
-
-Color fixes
-Better headers for Achievements and Events page
-Customizable home screen sections
-Added more translations
-Updated calendar data to align with new data parameters
-Removed list only active creatures setting, this can now be done through filters
-Homepage has a better fade transition
-
-Added villager gift guide!
-Open a villagers popup and click [View Gifts] to see a list
-Can now search wishlist
-Can now search new items page
-Updated filters
-Filters and searching now apply together
-Performance improvements for filters
-Filters should not overlap buttons anymore
-Updated translations
-Made it easier for me to keep the app updated with new data and new filters
-Added subtle achievements stamp animation
-Fixed achievements stamp loading
-Added missing modifiers in addition to nouns in achievements page
-Settings popup descriptions are improved
-Check marks now properly sync with variations
-Added ability to filter what villagers can wear in gift guide
-Fixed crashes associated to villager gift guide
-A restart is required when you change languages, rewrote the way translations are applied - for efficiency
-
-Added achievements page!
-Fixed translations, critical text bug
-Fixed mystery islands visited not properly saving
-Added [Highlight furniture with non-craftable variations] setting and filter. Useful for completing your catalog!
-
-You can sort things alphabetically, option in settings
-Reworked how items are checked off/saved to wishlist
-Loading should now be faster
-Added more translations
-Fixes to progress bar and wishlist
-Formatting fixes
-
-Added wishlist. Long press any item to add it to the wishlist!
-Variations are now checked off within an item
-Long press a variation for a larger image view
-Removed confusing variation settings
-Added NPC translations
-Fixed wishlist bugs
-
-Added [New Items] page. Go here to see all the new items that were recently added in the new update
-Fixed crafting materials translations
-Fixed current villagers on home screen
-Fixed 24 hour times not displayed correctly
-Filter translation support
-
-Can set language in settings
-French language translation supported, thanks Christophe!
-Note: translations only apply to items, apart from supported translated languages
-Images are now downloaded, can be used offline (can be disabled in settings)
`
    