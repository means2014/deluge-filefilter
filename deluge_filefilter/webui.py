# -*- coding: utf-8 -*-
# Copyright (C) 2025 Chris Means <chris-means@proton.me>
#
# Basic plugin template created by the Deluge Team.
#
# This file is part of FileFilter and is licensed under GNU GPL 3.0, or later,
# with the additional special exception to link portions of this program with
# the OpenSSL library. See LICENSE for more details.
from __future__ import unicode_literals

import logging

from deluge.plugins.pluginbase import WebPluginBase

from .common import get_resource

log = logging.getLogger(__name__)


class WebUI(WebPluginBase):

    scripts = [get_resource('filefilter.js')]

    def enable(self):
        pass

    def disable(self):
        pass
