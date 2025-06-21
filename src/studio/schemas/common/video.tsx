import { defineType } from 'sanity';
import { CiVideoOn } from 'react-icons/ci';
import { alt } from '$studio/lib/alt';

const video = defineType({
	title: 'Video',
	name: 'common.video',
	type: 'object',
	icon: CiVideoOn,
	fields: [
		{
			name: 'thumbnail',
			type: 'image',
			title: 'Video Thumbnail',
			description: 'Image to be displayed as the video thumbnail',
			fields: [alt()],
			options: {
				hotspot: true
			}
		},
		{
			name: 'video_webm',
			type: 'file',
			title: 'WebM',
			options: {
				accept: 'video/webm,video/x-matroska'
			}
		},
		{
			name: 'video_hevc',
			type: 'file',
			title: 'MOV - HEVC',
			options: {
				accept: 'video/quicktime,video/mp4'
			}
		}
	],

	validation: (Rule) =>
		Rule.custom((video) => {
			if (!video?.video_webm && !video?.video_hevc) {
				return 'Both WebM and MOV - HEVC videos are required';
			}
			return true;
		})
});

export default video;
