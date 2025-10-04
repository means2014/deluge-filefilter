# deluge-filefilter

[GitHub project](https://github.com/means2014/deluge-filefilter/)

# Description

Plugin for Deluge WebUI, allowing users to automatically remove torrents containing files with unwanted extensions.

# Drawbacks

When using the extension, you may notice that the torrent is allowed to persist until a file is completed.
In many cases, the file with the offending extension may be the only file within the torrent.
In such case, that file would have to reach 100% before being removed by this plugin.

Why?
Deluge plugins rely on events emitted by Deluge-core.  
The only relevant events which are guaranteed to trigger after the torrent's metadata is retrieved are "TorrentFileCompletedEvent" and 
"TorrentFinishedEvent". 
We want to execute the filtering as soon as possible, so we choose "TorrentFileCompletedEvent".
This way, any file in the torrent reaching 100% will trigger the plugin (a small .txt could complete, and the plugin will
then check the extensions of every file in the torrent).


# Installation

## Option 1: Install the egg via WebUI

1) In the Deluge WebUI, navigate to 'Preferences -> Plugins -> Install Plugin' 
2) Choose the .egg file from `dist/`
3) Activate the `FileFilter` plugin
4) Navigate to the newly added FileFilter options pane
5) Add glob pattern(s) you would like to filter against
6) Click `Apply` or `Ok`

## Option 2: Install the egg via filesystem

In some cases, when adding an egg from the WebUI, it will never actually install the plugin.
If you encounter this issue, simply copy the .egg file from `dist/` to `{Deluge's installation directory}/plugins/`
(if no external plugins have been installed, you may have to create this directory) and restart the deluged service.
Then, open the WebUI and add follow `Option 1`  from step `3`

## Build from source:

If you wish to build the egg yourself, simply run `python setup.py bdist_egg` command.  
A new .egg file will be generated the dist directory, which can be installed via the methods described above.

# Future Development

We plan to add a whitelisting feature, to allow a user to disable the extension on a per-torrent basis.
Please feel free to suggest additional features by submitting a Github issue, or consider contributing to the project directly.

We plan to look into the feasibility of a non-blocking wait in response to a TorrentAddedEvent, 
which would allow the plugin to pause the torrent until metadata is available, preempting the download of any potentially unwanted data.
